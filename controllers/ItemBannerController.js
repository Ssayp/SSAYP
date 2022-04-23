const { response, request } = require("express");
var cloudinary = require('cloudinary').v2;

const Data = require("../models/ItemBannerModel");

const {  listService, disableService, updateService } = require("../utils/transversalService");

const extImage = ['image/jpeg', 'image/png'];


const create = (req = request, res = response) => {
    try{
        
        
        if(req.files){
            const image = req.files.file;
            if(extImage.includes(image.mimetype)){

                cloudinary.uploader.upload(image.tempFilePath, { tags: req.body.title})
                .then((image) => {
                    
                    const requestBody = {...req.body, image: image.secure_url, data_provider: image };
                    const data = new Data(requestBody);

                    data.save(function(error, saved){
                        if(error)
                            return res.status(400).json({
                                success: false,
                                error
                            })
                        else
                            return res.status(200).json({
                                success: true,
                                message: "Actualización exitosa",
                                image: image.secure_url,
                                _id: saved._id
                            })
                        })
                    
                }).catch(error => {
                    return res.status(400).json({
                        success: false,
                        error
                    })
                })

                

            }else
                return res.status(400).json({
                    success: false,
                    error: "Falta imagen"
                })
        }else
            return res.status(400).json({
                success: false,
                error: "Falta imagen"
            })
       

    }catch(error){
        return res.status(400).json({
            success: false,
            error
        })
    }
}

const update = async(req = request, res = response) => {

    const id = req.body._id;

    const data = await Data.findById(id);

    if(data == undefined || data == null)
        return res.status(400).json({
            success: false,
            error: "No Data"
        })

    const publicId =  data.data_provider.public_id;

    if(req.files){
      if(publicId){
        cloudinary.uploader.destroy(publicId)
            .then((resp) => {
                console.log(resp);
                updateWithFile(req, res)
            })
            .catch(error => {
                console.log("error ", error);
                return res.status(400).json({
                    success: false,
                    error
                })
            })
        }else{
            updateWithFile(req, res);
        }  
    }else
        updateService(Data, req, res);
    
    
    
    //updateService(Data, req, res);
}

const disable = (req = request, res = response) => {
    disableService(Data, req, res);
}

const getAll = (req = request, res = response) => {
    listService(Data, req, res, { populate0: "banner_id" });
}

const updateWithFile = (req, res) => {
    const image = req.files.file;
    if(extImage.includes(image.mimetype)){

        cloudinary.uploader.upload(image.tempFilePath, { tags: req.body.title})
        .then((image) => {
            
            const update = {...req.body, image: image.secure_url, data_provider: image };
            Data.findByIdAndUpdate(update._id, update,
                (error) => {
                    if(error)
                        return res.status(400).json({
                            success: false,
                            error
                        })
                    else
                        return res.status(200).json({
                            success: true,
                            message: "Actualización exitosa"
                        })
                }
            )
            
        }).catch(error => {
            return res.status(400).json({
                success: false,
                error
            })
        })

    }else
        return res.status(400).json({
            success: false,
            error: `Extensión invalida ${image.mimetype}`
        })
}

module.exports = {
    create,
    getAll,
    update,
    disable
}