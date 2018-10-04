const Space = require('./models/space')


const reseed = async () => {
    const spaces = await Space.forge({}).fetchAll()
    await Promise.all(spaces.map(space => space.destroy()))
    await Space.forge({name: 'seeded space', diskquota_mb:1000, memoryquota_mb:4000}).save()
    const asdf = await Space.forge({}).fetchAll()    
    console.log('Seeded spaces: ', asdf.toJSON())
}

reseed().then(()=>{process.exit()})
