import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import axios from 'axios';

Vue.use(Router);


const cookieCleaner = () => {
    return document.cookie.split(";").reduce(function (acc, cookie) {
        const eqPos = cookie.indexOf("=");
        const cleanCookie = `${cookie.substr(0, eqPos)}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
        return `${acc}${cleanCookie}`;
    }, "");
}


let router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/apps",
            name: "apps",
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/calculator/Calculator.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/faq",
            name: "faq",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/faq/FAQ.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/About.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/dashboardadmin",
            name: "dashboardAdmin",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/dashboard/DashboardAdmin.vue"),
            meta: {
                layout: 'none',
                requiresAuth: true,
                roles: []
            },
            children: [
                {
                    path: '/dashboard/admin',
                    requiresAuth: false,
                    component: () =>
                        import("./views/dashboard/v1/subscription/subscription.vue")
                },
            ]
        },
        {
            path: "/dashboard",
            name: "dashboard",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/dashboard/Dashboard.vue"),
            meta: {
                layout: 'none',
                requiresAuth: true,
                roles: []
            },
            children: [
                {
                    path: '/dashboard/user',
                    requiresAuth: false,
                    component: () =>
                        import("./views/dashboard/v1/welcome/welcome.vue")
                },
                {
                    path: '/dashboard/user/security',
                    component: () =>
                        import("./views/dashboard/v1/security/Security.vue")
                },
                {
                    path: '/dashboard/user/accounts',
                    component: () =>
                        import("./views/dashboard/v1/accounts/accounts.vue")
                },
                {
                    path: '/dashboard/user/payments',
                    component: () =>
                        import("./views/dashboard/v1/payment/payment.vue")
                },
                {
                    path: '/dashboard/integration',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/website-integration/websiteintegration.vue"),
                },
                {
                    path: '/loading-screen',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/college-saving-application/LoadingScreen.vue"),
                },
                {
                    path: '/print-pdf',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/college-saving-application/printpdf.vue"),
                },
                {
                    path: '/print-pdf-retirement',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/retirement-spending-application/printpdfRetirement.vue"),
                },
                {
                    path: '/print-pdf-rs',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/retirement-saving-application/printpdfRS.vue"),
                },
                {
                    path: '/dashboard/trial-flow-1',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/trialflow1.vue"),
                },
                {
                    path: '/dashboard/trial-flow-2',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/trialflow2.vue"),
                },
                {
                    path: '/dashboard/trial-flow-4',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/trialflow4.vue"),
                },
                {
                    path: '/dashboard/trial-flow-5',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/trialflow5.vue"),
                },
                {
                    path: '/dashboard/trial-flow-6',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/trialflow6.vue"),
                },
                {
                    path: '/dashboard/trial-flow-8',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/trialflow8.vue"),
                },
                {
                    path: '/dashboard/subscription',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/managesubscription.vue"),
                },
                {
                    path: '/dashboard/olduserflow5',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/olduserflow5.vue"),
                },
                {
                    path: '/dashboard/olduserflow1',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/olduserflow1.vue"),
                },
                {
                    path: '/dashboard/olduserflow3',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/manage-subscription/olduserflow3.vue"),
                },
                {
                    path: '/dashboard/leadgen',
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/lead-gen/leadgen.vue"),
                },
                {
                    path: '/dashboard/cta',
                    component: () =>
                        import("./views/dashboard/v1/sampleCTAs/sampleCTAs.vue")
                },
                {
                    path: "/dashboard/sampleCTAs",
                    name: "sampleCTAs",
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import( /* webpackChunkName: "about" */ "./views/dashboard/v1/sampleCTAs/sampleCTAs.vue"),
                    meta: {
                        layout: 'default',
                        roles: [],
                        requiresAuth: false,
                    }
                }

            ]
        },
        {
            path: "/contact",
            name: "contact",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/contact/Contact.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/login",
            name: "login",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/login/Login.vue"),
            meta: {
                layout: 'none',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/signup",
            name: "signup",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/signup/Signup.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/newNegApps",
            name: "newNegApps",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/apps/NewNegApp.vue"),
            meta: {
                layout: 'none',
                requiresAuth: false,
                roles: []
            },
            children: [{
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: '/college/free',
                    component: import( /* webpackChunkName: "about" */ "./views/apps/college/Free.vue")
                },
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: '/college/premium',
                    component: import( /* webpackChunkName: "about" */ "./views/apps/college/Premium.vue")
                }
            ]
        },
        // {
        //     path: "/college-saving-application",
        //     name: "collegeSavingApplication",
        //     component: () =>
        //         import("./views/college-saving-application/collegeSavingApplication.vue"),
        //     meta: {
        //         layout: "default",
        //         requiresAuth: true,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/retirement-spending-application",
        //     name: "retirementSpendingApplication",
        //     component: () =>
        //         import("./views/retirement-spending-application/App.vue"),
        //     meta: {
        //         layout: "default",
        //         requiresAuth: true,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/retirement-saving-application",
        //     name: "retirementSavingApplication",
        //     component: () =>
        //         import("./views/retirement-saving-application/retirementSavingApplication.vue"),
        //     meta: {
        //         layout: "default",
        //         requiresAuth: true,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/app/college-saving-application",
        //     name: "collegeSavingApplication",
        //     component: () =>
        //         import("./views/retirement-spending-application/CollegeApp.vue"),
        //     meta: {
        //         layout: "default",
        //         requiresAuth: true,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/app/retirement-spending-application",
        //     name: "retirementSpendingApplication",
        //     component: () =>
        //         import("./views/retirement-spending-application/RetirementSpendApp.vue"),
        //     meta: {
        //         layout: "default",
        //         requiresAuth: true,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/app/retirement-saving-application",
        //     name: "retirementSavingApplication",
        //     component: () =>
        //         import("./views/retirement-spending-application/RetirementSavingApp.vue"),
        //     meta: {
        //         layout: "default",
        //         requiresAuth: true,
        //         roles: []
        //     }
        // },
        {
            path: "/video",
            name: "video",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/video/Video.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        {
            path: "/blog",
            name: "blog",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/blog/Blog.vue"),
            meta: {
                layout: 'default',
                requiresAuth: false,
                roles: []
            }
        },
        // {
        //     path: "/dashboard/security",
        //     name: "security",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import( /* webpackChunkName: "about" */ "./views/dashboard/security/security.vue"),
        //     meta: {
        //         layout: 'default',
        //         requiresAuth: false,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/dashboard/welcome",
        //     name: "welcome",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import( /* webpackChunkName: "about" */ "./views/dashboard/welcome/welcome.vue"),
        //     meta: {
        //         layout: 'default',
        //         requiresAuth: false,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/dashboard/accounts",
        //     name: "accounts",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import( /* webpackChunkName: "about" */ "./views/dashboard/accounts/accounts.vue"),
        //     meta: {
        //         layout: 'default',
        //         requiresAuth: false,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/dashboard/payment",
        //     name: "payment",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import( /* webpackChunkName: "about" */ "./views/dashboard/payment/payment.vue"),
        //     meta: {
        //         layout: 'default',
        //         requiresAuth: false,
        //         roles: []
        //     }
        // },
        // {
        //     path: "/dashboard/websiteintegration",
        //     name: "website-integration",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import( /* webpackChunkName: "about" */ "./views/dashboard/website-integration/websiteintegration.vue"),
        //     meta: {
        //         layout: 'default',
        //         requiresAuth: false,
        //         roles: []
        //     }
        // },

    ]
});

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        localStorage.clear()
        cookieCleaner();
        next();
    }

    if (to.matched.some(record => !!record.meta.requiresAuth)) {
        // let currentUser = localStorage.getItem(CURRENT_USER_KEY);

        // if (!currentUser) {
        //
        // } else {
        //     next()
        // }

        axios.get(`/be/currentUser`).then(res => {
            if(res.data.error) {
                next({
                    path: '/login?nextUrl=' + to.fullPath,
                    params: {
                        nextUrl: to.fullPath
                    }
                })
            } else {
                next()
            }
        })
    } else {
        next()
    }
})

export default router
