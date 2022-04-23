const { response } = require('express');

// const Module = require('../models/ModuleModel');
// const FormAvailable = require('../models/FormAvailableModel');
// const SectionForm = require('../models/SectionFormModel');
// const QuestionForm = require('../models/QuestionFormModel');

const saveData = async(req, res = response) => {

    // const module = await Module.find({is_active: true});
    // const availableForms = await FormAvailable.find({ is_active: true })
    // const sectionForms = await SectionForm.find({ is_active: true });
    // const questionForms = await QuestionForm.find({ is_active: true });

    const data = [
        {
            _id: "61b369953b5ff5a324f93073",
            description: "FORMULARIO DE DATOS DE ACTIVIDAD DIARIA",
            code: "FO-MI-DP-07",
            version: "1",
            approvalDate: "2021-12-10T14:52:13.000Z",
            module: {
                _id: "61b369033b5ff5a324f93057",
                code: 1,
                description: "Pescadería",
                icon: "pescado.jpg",
                is_active: true,
                createdAt: "2021-12-10T14:49:39.870Z",
                updatedAt: "2021-12-10T14:49:39.870Z",
                __v: 0
            },
            is_active: true,
            createdAt: "2021-12-10T14:52:05.973Z",
            updatedAt: "2021-12-10T14:59:48.978Z",
            __v: 0
        }
    ];

    const codes = ['FO-MI-DP-07', 'FO-MI-DP-03', '1500-63.04', 'FO-MI-DP-06'];

    let resp = '';

    // console.log(data[0].code);

    switch (data[0].code) {
        case codes[1]:
            resp = "Data guardada en monitoreo"
            break;

        case codes[0]:
            resp = "Data guardada en actividad diaria"
            break;

        
        default:
            return res.status(400).json({
                ok: false,
                msg: 'Error al guardar la información'
            });
    }

    res.json({
        ok: true,
        msg: resp
    });

};


module.exports = {
    saveData
};