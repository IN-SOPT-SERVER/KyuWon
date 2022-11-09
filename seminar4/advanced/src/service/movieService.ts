import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type jsonType ={ [key: string]: string};

const createMovie = async (title: string, actor: Array<string>, genre: Array<string>, episode: Array<jsonType>, visible: boolean) => {
    return await prisma.movie.create({
        data: {
            title,
            actor,
            genre,
            episode,
            visible
        }
    })
};

const getOneMovie = async (id: number) => {
    const data = await prisma.movie.findUnique({
        where: {
            id
        }
    })
    return data;
}

const getAllMovie = async () => {
    const data = await prisma.movie.findMany();
    return data;
}

const updateMovie = async (id: number, body: {
    title: string, actor: Array<string>, genre: Array<string>, episode:any , visible: boolean
}) => {
    const {title, actor, genre, episode, visible} = body;
    const data = await prisma.movie.update({
        where: {
            id
        },
        data: {
            title,
            actor,
            genre,
            episode,
            visible
        }
    })
    return data;
}

const updateVisible = async (id: number, visible: boolean) => {
    const data = await prisma.movie.update({
        where: {
            id
        },
        data: {
            visible
        }
    });
    console.log(data);
    return data;
}

const deleteMovie = async (id: number) => {
    const data = await prisma.movie.delete({
        where: {
            id
        }
    })
    return data;
}

const movieService = {
    createMovie,
    getOneMovie,
    getAllMovie,
    updateMovie,
    updateVisible,
    deleteMovie
};

export default movieService;