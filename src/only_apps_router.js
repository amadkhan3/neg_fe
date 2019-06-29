import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


let router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: "/",
            name: "calculator",
            component: () =>
            import( /* webpackChunkName: "about" */ "./views/calculator/Calculator.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            },
            children: [
                {
                    path: "/college-saving-application",
                    name: "collegeSavingApplication",
                    component: () =>
                        import("./views/retirement-spending-application/CollegeApp.vue"),
                    meta: {
                        layout: "default",
                        requiresAuth: true,
                        roles: []
                    }
                },
                {
                    path: "/retirement-spending-application",
                    name: "retirementSpendingApplication",
                    component: () =>
                        import("./views/retirement-spending-application/RetirementSpendApp.vue"),
                    meta: {
                        layout: "default",
                        requiresAuth: true,
                        roles: []
                    }
                },
                {
                    path: "/retirement-saving-application",
                    name: "retirementSavingApplication",
                    component: () =>
                        import("./views/retirement-spending-application/RetirementSavingApp.vue"),
                    meta: {
                        layout: "default",
                        requiresAuth: true,
                        roles: []
                    }
                }

            ]
        },

    ]
});

export default router
