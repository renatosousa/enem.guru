'use strict'

const Questao = use('App/Models/Questao')

const {validate} = use('Validator')

class QuestoesController {
    async add({view}){
        return view.render('questoes.add', {
            titulo: 'Adicinar Questão'
        })
    }

    async   detalhe({params, view}){
        const questao = await Questao.find(params.id);
        return view.render('questoes.detalhe', {
            questao: questao,
        })
    }


    async list({view}){
        const questoes = await Questao.all();
        return view.render('questoes.list', {
            titulo: 'Listar',
            questoes: questoes.toJSON()
        })
    }

    async   adiciona({request, response, session}){
        const validator = await validate(request.all(),{
            enunciado: 'required|min:5'
        });
        if (validator.fails()){
            session.withErrors(validator.messages()).flashAll()
            return response.redirect('back')
        }
        const questao = new Questao();
        questao.enunciado = request.input('enunciado');
        await questao.save();
        console.log(questao);
        session.flash({notification: 'Questão adicionada'})
        return response.redirect('/questoes/'+questao.id)
    }
}

module.exports = QuestoesController
