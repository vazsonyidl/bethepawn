import {defineCollection, z} from 'astro:content';


const boardGamesCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        image: z.string(),
        description: z.string(),
        info: z.string(),
    }),
});

export const collections = {
    'board-games': boardGamesCollection,
};