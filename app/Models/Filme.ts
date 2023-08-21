import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'

export default class Filme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public classificacao: string

  @column()
  public sinopse: string

  @column()
  public duracao: string

  @column()
  public categoriaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Categoria)
  public categoria: BelongsTo<typeof Categoria>

}
