import {defineCollection, z} from 'astro:content';


const boardGamesCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        description: z.string(),
        language: z.string(),
        'price-per-week': z.string(),
        deposit: z.string(),
        players: z.string(),
        time: z.string(),
        age: z.string(),
    }),
});

export const collections = {
    'board-games': boardGamesCollection,
};