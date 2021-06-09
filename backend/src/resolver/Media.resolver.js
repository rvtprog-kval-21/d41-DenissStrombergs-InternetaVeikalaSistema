import fs from 'fs'
import CONFIG from '../base/Config';

export const mediaResolver = {
    Mutation: {
        uploadMedia: async function(_, data, { rootDir }) {
            try {
                const base64Image = data.data.split(';base64,').pop()
                const randomName = Math.random().toString(36).substr(2) + '.png'

                fs.writeFile(rootDir + '\\public\\images\\' + randomName, base64Image, { encoding: 'base64' }, function(error) {
                    console.error(error);
                    return null
                });

                return `${ CONFIG.API }/images/${ randomName }`
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default mediaResolver
