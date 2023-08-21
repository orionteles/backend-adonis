// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria";

export default class CategoriasController {

    index(){
        return Categoria.query().preload('filmes')
    }

}
