// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Filme from "App/Models/Filme";

export default class FilmesController {

    index(){
        return Filme.all()
    }

    show({params}){
        const id = params.id
        return Filme.query().where('id', id).preload('categoria').first()
    }
    
    async store({request}){
        const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id'])
        return await Filme.create(dados)
    }
    
    async update({request, params}){
        const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id'])

        const id = params.id
        const filme = await Filme.findOrFail(id)
        
        filme.merge(dados)
        await filme.save()

        return filme
    }
    
    async destroy({params}){
        const id = params.id
        const filme = await Filme.findOrFail(id)
        
        filme.delete()
    }
}
