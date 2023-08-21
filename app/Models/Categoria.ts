import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Filme from './Filme'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Filme)
  public filmes: HasMany<typeof Filme>
}
