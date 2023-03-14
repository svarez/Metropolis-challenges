import Publications from '@/assets/json/frontiers-metropolis-challenge-L1.json'

export default {
    async get (id: String): Promise<typeof Publications> {
        return new Promise(resolve => {
            setTimeout(() => {
              resolve(Publications)
            }, 4)
        })
    }
}