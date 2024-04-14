import { IWardrobe } from '../types'
import { Shelves } from './Shelves'

export function Wardrobes({ wardrobes }: { wardrobes: IWardrobe[] }) {
    return (
        <>
            {wardrobes.map((wardrobe) => (
                <div key={wardrobe.ID}>
                    <h2 className='text-4xl font-bold'>Шкаф {wardrobe.ID}</h2>
                    <div className='grid grid-cols-5 gap-8'>
                        <Shelves shelves={wardrobe.shelves} />
                    </div>
                </div>
            ))}
        </>
    )
}
