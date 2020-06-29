 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {


  public async index({ view }: HttpContextContract){
    return view.render('tasks/index')
  }

  public async about({ view, params }: HttpContextContract){
    const name = params.name
    return view.render('about', { name })
  }

  public async contact({ view }: HttpContextContract){
    return view.render('contact')
  }

}
