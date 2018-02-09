import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import * as sqip from 'sqip'

const writeFile = promisify(fs.writeFile)

type Image = {
  name: string
  path: string
}

interface IGhostStoragePreprocessorTransform {
  save(img: Image, targetDir?: string): Promise<[Image, string | undefined][]>
  delete(img: Image, targetDir?: string): Promise<[Image, string | undefined][]>
}

module.exports = class GhostStoragePreprocessorSqipTransform implements IGhostStoragePreprocessorTransform {
  public async save(image: Image, targetDir?: string) {
    const res = sqip({ filename: image.path })
    const sqipPath = image.path + '.sqip.svg'
    const sqipImage = Object.assign({}, image, {
      name: image.name + '.sqip.svg',
      path: sqipPath,
      mimetype: 'image/svg',
      type: 'image/svg'
    })
    await writeFile(sqipPath, res.final_svg)
    return [
      [image, targetDir],
      [sqipImage, targetDir]
    ] as [Image, string][]
  }

  public async delete(image: Image, targetDir?: string) {
    return []
  }
}
