const { response, request } = require("express");

const WebPage = require("../models/WebPageModel");
const SiteWeb = require("../models/WebSiteModel");

const Banner = require("../models/BannerModel");
const ItemBanner = require("../models/ItemBannerModel");
const Menu = require("../models/MenuModel");

//const { sendDataResponse, genericResponse, internalError, badRequestError } = require("../utils/response");

const getSitesWeb = (req = request, res = response) => {
    try{
        const { id } = req.params;

        SiteWeb.find({ idSite: id, is_active: true }, 
            async(error, site) => {
                if(error){
                    return res.status(400).json({
                        success: false,
                        error
                    })
                }else{
                    if(site.length > 0){
                        const webPage = await WebPage.find({ site_id: site[0]._id, is_active: true });
                        const banner =  await Banner.find({ site_id: site[0]._id, is_active: true });
                        const itemBanner =  await ItemBanner.find({ banner_id: banner[0]._id, is_active: true });
                        const menu = await Menu.find({ site_id: site[0]._id, is_active: true });

                        const provArray = menu.filter(item => item.nivel == 1);
                        let arrayMenu = [];

                        if(provArray.length > 0){
                            provArray.forEach(element => {
                                const item = menu.filter(it => (it.father == element._id && it.nivel == 2));
                                
                                const itemComplet = { ...element};
                                let temp = {...itemComplet['_doc'], children: item.length > 0 ? getItem(item, menu) : []};
                                arrayMenu.push(temp);
                            });
                        }

                        res.status(200).json({
                            success: true,
                            message: "Consulta exitosa",
                            site,
                            webPage,
                            banner,
                            itemBanner,
                            menu: arrayMenu
                        })
                    }else{
                        res.status(400).json({
                            success: false,
                            message: "No se encuentra ningún sitio con el id enviado",
                            site: []
                        })
                    }
                    
                }
            }
        )
    }catch(error){
        return res.status(400).json({
            success: false,
            error
        })
    }
}

const getItem = (item, menu) => {
    let arrayMenu = [];
    
    item.forEach(element => {
        const item = menu.filter(it => (it.father == element._id && it.nivel == 3));
        const itemComplet = { ...element};
        let temp = {...itemComplet['_doc'], children: item.length > 0 ? item : []};
        arrayMenu.push(temp);
    });

    return arrayMenu;
}

module.exports = {
    getSitesWeb
}








