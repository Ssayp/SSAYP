const { response } = require('express');

const Module = require('../models/ModuleModel');
const FormAvailable = require('../models/FormAvailableModel');
const SectionForm = require('../models/SectionFormModel');
const QuestionForm = require('../models/QuestionFormModel');

const { sendDataResponse } = require('../utils/response');
const { message } = require('../constants/response');
const { Actions } = require('../constants/actionLogs');

const getSearch = async (req, res = response) => {
  const module = await Module.find({ is_active: true });
  const availableForms = await FormAvailable.find({ is_active: true });
  const sectionForms = await SectionForm.find({ is_active: true });
  const questionForms = await QuestionForm.find({ is_active: true });

  let modules = [];

  if (module.length > 0)
    module.forEach((element) => {
      const form = availableForms.filter(
        (item) => item.module.toString() == element._id.toString()
      );
      let forms = [];

      if (form.length > 0)
        form.forEach((element) => {
          const section = sectionForms.filter(
            (item) => item.form_available.toString() == element._id.toString()
          );

          let sections = [];

          if (section.length > 0)
            section.forEach((element) => {
              const question = questionForms.filter(
                (item) => item.section_form.toString() == element._id.toString()
              );

              if (question.length > 0) {
                const object = {
                  idSection: element._id,
                  nameSection: element.description,
                  question,
                  duplicate: element.duplicate,
                  nameQuestion: element.nameQuestion,
                  moreOne: element.moreOne,
                };
                sections.push(object);
              }
            });

          const object = {
            idFormulario: element.code,
            nameSurvey: element.description,
            category: element.category ? element.category : 'General',
            sections,
          };
          forms.push(object);
        });

      const object = {
        idModule: element._id,
        nameModule: element.description,
        forms,
      };
      modules.push(object);
    });

  sendDataResponse(
    res,
    message.list,
    { modules },
    {
      Data: Module,
      req,
      action: Actions.list,
    }
  );
};

module.exports = {
  getSearch,
};
