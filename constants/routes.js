const routes = [
    {
        path: "/v1/api/questionary",
        route: require("../routes/QuestionaryRoutes")
    },
    {
        path: "/v1/api/user",
        route: require("../routes/UserRoutes")
    },
    {
        path: "/v1/api/auth",
        route: require("../routes/AuthRoutes")
    },
    {
        path: "/v1/api/rol",
        route: require("../routes/RolRoutes")
    },
    {
        path: "/v1/api/website",
        route: require("../routes/WebSitesRoutes")
    },
    {
        path: "/v1/api/webpage",
        route: require("../routes/WebPageRoutes")
    },
    {
        path: "/v1/api/banner",
        route: require("../routes/BannerRoutes")
    },
    {
        path: "/v1/api/item-banner",
        route: require("../routes/ItemBannerRoutes")
    },
    {
        path: "/v1/api/public",
        route: require("../routes/PublicWebRoutes")
    },
    {
        path: "/v1/api/menu",
        route: require("../routes/MenuRoutes")
    },
    {
        path: "/v1/api/species",
        route: require("../routes/SpeciesRoutes")
    },
    {
        path: "/v1/api/fishing-art",
        route: require("../routes/FishingArtRoutes")
    },
    {
        path: "/v1/api/fishing-method",
        route: require("../routes/FishingMethodRoutes")
    },
    {
        path: "/v1/api/propulsion-method",
        route: require("../routes/PropulsionMethodRoutes")
    },
    {
        path: "/v1/api/fishing-area",
        route: require("../routes/FishingAreaRoutes")
    },
    {
        path: "/v1/api/boat",
        route: require("../routes/BoatRoutes")
    },
    {
        path: "/v1/api/fishermen",
        route: require("../routes/FishermenRoutes")
    },
    {
        path: "/v1/api/measurement",
        route: require("../routes/MeasurementRoutes")
    },
    {
        path: "/v1/api/activitie",
        route: require("../routes/ActivitiesRoutes")
    },
    {
        path: "/v1/api/fishing-technique",
        route: require("../routes/FishingTechniqueRoutes")
    },
    {
        path: "/v1/api/monitoring",
        route: require("../routes/MonitoringRoutes")
    },
    {
        path: "/v1/api/module",
        route: require("../routes/ModuleRoutes")
    },
    {
        path: "/v1/api/form-available",
        route: require("../routes/FormAvailableRoutes")
    },
    {
        path: "/v1/api/section-form",
        route: require("../routes/SectionFormRoutes")
    },
    {
        path: "/v1/api/question-form",
        route: require("../routes/QuestionFormRoutes")
    },
    {
        path: "/v1/api/fishing-site",
        route: require("../routes/FishingSiteRoutes")
    },
    {
        path: "/v1/api/version",
        route: require("../routes/VersionRoutes")
    },
    {
        path: "/v1/api/generic",
        route: require("../routes/GenericRoutes")
    },
    {
        path: "/v1/api/weight-check",
        route: require("../routes/WeightCheckRoutes")
    },
    {
        path: "/v1/api/agricultural-producer-form",
        route: require("../routes/AgriculturalProducerFormRoutes")
    },
    {
        path: "/v1/api/crop",
        route: require("../routes/CropRoutes")
    },
    {
        path: "/v1/api/costs-and-income",
        route: require("../routes/CostsAndIncomeRoutes")
    },
    {
        path: "/v1/api/industrial-vessel-inspection",
        route: require("../routes/IndustrialVesselInspectionRoutes")
    },
    {
        path: "/v1/api/monitoring-agricultural-prices",
        route: require("../routes/MonitoringAgriculturalPricesRoutes")
    }
];

module.exports = {
    routes
}