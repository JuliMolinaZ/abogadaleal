const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Configuración de optimización por tipo de imagen
const OPTIMIZATION_CONFIG = {
  hero: {
    input: 'fondo.jpg',
    outputs: [
      { name: 'fondo.webp', width: 1920, quality: 85, format: 'webp' },
      { name: 'fondo-mobile.webp', width: 768, quality: 80, format: 'webp' },
    ]
  },
  logo: {
    input: 'logo-principal.png',
    outputs: [
      { name: 'logo-principal.webp', width: 512, quality: 90, format: 'webp' },
      { name: 'logo-principal.png', width: 512, quality: 90, format: 'png' },
    ]
  },
  attorney: {
    input: 'abogada.jpg',
    outputs: [
      { name: 'abogada.webp', width: 800, quality: 85, format: 'webp' },
      { name: 'abogada-thumbnail.webp', width: 400, quality: 80, format: 'webp' },
    ]
  }
};

// Configuración para OG Images (1200x630)
const OG_IMAGE_CONFIG = {
  width: 1200,
  height: 630,
  quality: 90
};

/**
 * Crea el directorio de salida si no existe
 */
async function ensureOutputDir() {
  try {
    await fs.access(OUTPUT_DIR);
  } catch {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Directorio creado: ${OUTPUT_DIR}`);
  }
}

/**
 * Optimiza una imagen según la configuración
 */
async function optimizeImage(config) {
  const inputPath = path.join(INPUT_DIR, config.input);

  console.log(`\n🔄 Procesando: ${config.input}`);

  for (const output of config.outputs) {
    const outputPath = path.join(OUTPUT_DIR, output.name);

    try {
      const sharpInstance = sharp(inputPath);

      // Redimensionar si se especifica ancho
      if (output.width) {
        sharpInstance.resize(output.width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        });
      }

      // Aplicar formato y calidad
      switch (output.format) {
        case 'webp':
          sharpInstance.webp({ quality: output.quality });
          break;
        case 'png':
          sharpInstance.png({ quality: output.quality, compressionLevel: 9 });
          break;
        case 'jpeg':
        case 'jpg':
          sharpInstance.jpeg({ quality: output.quality, progressive: true });
          break;
      }

      await sharpInstance.toFile(outputPath);

      // Obtener stats del archivo
      const stats = await fs.stat(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`   ✓ ${output.name} - ${sizeKB} KB`);

    } catch (error) {
      console.error(`   ✗ Error procesando ${output.name}:`, error.message);
    }
  }
}

/**
 * Crea una imagen OpenGraph con logo
 */
async function createOGImage(name) {
  const logoPath = path.join(INPUT_DIR, 'logo-principal.png');
  const backgroundPath = path.join(INPUT_DIR, 'fondo.jpg');
  const outputPath = path.join(OUTPUT_DIR, name);

  try {
    // Crear fondo con gradiente oscuro
    const background = await sharp(backgroundPath)
      .resize(OG_IMAGE_CONFIG.width, OG_IMAGE_CONFIG.height, { fit: 'cover', position: 'center' })
      .modulate({ brightness: 0.4 }) // Oscurecer para mejor legibilidad
      .blur(2) // Blur ligero para efecto profesional
      .toBuffer();

    // Redimensionar logo
    const logo = await sharp(logoPath)
      .resize(200, 200, { fit: 'inside' })
      .toBuffer();

    // Componer imagen final
    await sharp(background)
      .composite([
        {
          input: logo,
          gravity: 'center',
          top: 150, // Posicionar logo arriba del centro
        }
      ])
      .jpeg({ quality: OG_IMAGE_CONFIG.quality, progressive: true })
      .toFile(outputPath);

    const stats = await fs.stat(outputPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`   ✓ ${name} - ${sizeKB} KB`);

  } catch (error) {
    console.error(`   ✗ Error creando ${name}:`, error.message);
  }
}

/**
 * Genera todas las imágenes OpenGraph
 */
async function generateOGImages() {
  console.log(`\n🎨 Generando imágenes OpenGraph (1200x630)...`);

  const ogImages = [
    'og-image.jpg',
    'og-home.jpg',
    'og-servicios.jpg',
    'og-asesorias.jpg',
    'og-about.jpg',
  ];

  for (const name of ogImages) {
    await createOGImage(name);
  }
}

/**
 * Muestra estadísticas de optimización
 */
async function showStats() {
  console.log('\n📊 Estadísticas de Optimización:\n');

  try {
    const files = await fs.readdir(OUTPUT_DIR);
    let totalOptimized = 0;

    for (const file of files) {
      const filePath = path.join(OUTPUT_DIR, file);
      const stats = await fs.stat(filePath);
      totalOptimized += stats.size / 1024 / 1024; // Convertir a MB
    }

    console.log(`   Archivos generados: ${files.length}`);
    console.log(`   Tamaño total optimizado: ${totalOptimized.toFixed(2)} MB\n`);

  } catch (error) {
    console.error('Error calculando estadísticas:', error.message);
  }
}

/**
 * Función principal
 */
async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  try {
    // Crear directorio de salida
    await ensureOutputDir();

    // Optimizar imágenes principales
    console.log('\n🖼️  Optimizando imágenes principales...');
    for (const [key, config] of Object.entries(OPTIMIZATION_CONFIG)) {
      await optimizeImage(config);
    }

    // Generar OG images
    await generateOGImages();

    // Mostrar estadísticas
    await showStats();

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n✅ Optimización completada con éxito!\n');
    console.log('📁 Archivos optimizados en: public/images/optimized/\n');
    console.log('📝 Próximos pasos:');
    console.log('   1. Actualizar referencias de imágenes en componentes');
    console.log('   2. Usar /images/optimized/ en lugar de /images/');
    console.log('   3. Verificar que next/image esté usando las versiones optimizadas\n');

  } catch (error) {
    console.error('\n❌ Error durante la optimización:', error);
    process.exit(1);
  }
}

// Ejecutar script
main();
