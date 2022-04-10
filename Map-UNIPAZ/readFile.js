export let loadFiles = []

export const importFiles = async () => {
  const { resolve } = await import('import-meta-resolve')
  const { readdirSync } = await import('fs')
  loadFiles = []

  const DIR = await resolve('./src/geoJson/delimits', import.meta.url)
  const files = DIR.slice('file:///'.length)

  for (const subfolder of readdirSync(files)) {
    const command = await import(`./src/geoJson/delimits/${subfolder}`)
    loadFiles.push(command)
  }
}
