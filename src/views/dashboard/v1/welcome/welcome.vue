<template>

    <div class="content-inner welcome-area" v-if="profileItems">
        <b-modal size="lg" style="width: 100%;" ref="myModalRef" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Is your website design modern and designed to hold new visitors’ attention?</p>
                <p class="modal-content">
                    Research has shown that a new visitor will make the decision to stay on your website or move on within 3 seconds.  A professional website designer (preferably one who specializes in financial advisor sites) can help you create a site that will attract and hold visitors’ attention.  Here are a few basic tips for financial advisor website design – </p>

                <ul class="modal-ul">
                    <li>Minimize text and avoid generic images, such as lighthouses, compasses, retired couples walking along the beach, etc.</li>
                    <li>Create a short, unique, non-generic tagline that defines your practice/value proposition and feature it prominently for new visitors to see.  If you have more than one, you may rotate the messages every 5 or 10 seconds on your HOME page.</li>
                    <li>Use a vertically scrolling HOME page format.  Understand that most new site visitors will not click on another page.</li>
                    <li>Incorporate short (30-60 seconds), non-generic videos into your home page.   The videos should help the user quickly and easily get to know you, your team, and/or your business philosophy. </li>
                    <li> Incorporate calls-to-action (CTAs) throughout the home page.  Examples – “Schedule an Appointment,”  “Subscribe to our Newsletter,” “Will Your Retirement Savings Last?”</li>
                </ul>
            </div>
        </b-modal>
        <b-modal size="lg" ref="ModalRef" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal2">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Are you aware of your website’s analytics (traffic, bounce rate, engagement time, page use, click analytics, etc.)? </p>
                <p class="modal-content">
                    While incorporating applications such as Nest Egg Guru into your website can help boost traffic and visibility, it cannot work miracles. The Internet is a crowded and competitive space for financial advisor websites, and, as such, it is often difficult for individual FA websites to attract organic traffic. As a starting point, we encourage all subscribers to work with their website designers to gain a baseline understanding of their current visitor metrics and to keep track of this data over time.
                </p>
            </div>
        </b-modal>

        <b-modal size="lg" ref="ModalRefs" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal3">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Are you actively applying Search Engine Optimization (SEO) strategies to improve your website’s online visibility? </p>
                <p class="modal-content">
                    Nest Egg Guru can help boost your search engine ranking by boosting the time that users spend on your website. If Nest Egg Guru’s apps are embedded into your HOME page, each time new site visitors or existing clients use them it will demonstrate to search engines that there is interesting content on your site and therefore increase the likelihood that search engines, such as Google and Bing, will refer traffic to your site. There are many other strategies for optimizing search engine rankings as well, and all Nest Egg Guru subscribers are encouraged to work with their website design firms to implement them.
                </p>
            </div>
        </b-modal>

        <b-modal size="lg" ref="ModalRefs4" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal4">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Are your Nest Egg Guru apps featured on your HOME page? </p>
                <p class="modal-content">
                    Your HOME page receives far more traffic than any other page on your website. Therefore, to get the most out of your subscription, you should incorporate it into your HOME page. If you have a separate page on your website for clients, you may wish to incorporate your Nest Egg Guru college and retirement planning apps there, in addition to featuring the apps on your HOME page.
                </p>
            </div>
        </b-modal>
        <b-modal size="lg" ref="ModalRefs5" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal5">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Have you used the EMBED CODE to Integrate your Nest Egg Guru apps into your website? </p>
                <p class="modal-content">
                    All Nest Egg Guru subscribers receive their own unique URL (also known as a “subdomain”) for accessing their Net Egg Guru subscription(s). While the URL enables you to begin using the subscription with clients immediately, all subscribers should understand that, when using the URL, you are running the applications from Nest Egg Guru’s website. Alternatively, if you incorporate your Nest Egg Guru apps into your website using the EMBED code, the apps will run from your website, which can help boost your search engine ranking.
                </p>
            </div>
        </b-modal>
        <b-modal size="lg" ref="ModalRefs6" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal6">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title"> Are you using calls-to-action (CTAs) to attract site visitors to run your Nest Egg Guru applications?  </p>
                <p class="modal-content">
                    Nest Egg Guru’s college and retirement planning apps are most effective when promoted with a strong call to action, such as, “If things go badly in the markets, will you still be okay?” or “Will you have enough?” followed by a “TEST YOUR PREPAREDNESS” button that opens the apps. If you subscribe to two or more of the Nest Egg Guru college and retirement planning apps, you may use separate CTAs for each or a single CTA. Your website designer may provide guidance on this subject as well. While you may be as creative as you like in designing your CTAs, here are a couple common mistakes to AVOID:
                </p>
                <ul class="modal-ul">
                    <div style="height: 20px !important;"></div>
                    <li>
                        Do NOT refer to the planning apps as “Calculators” or “Planning Tools.” Dry, uninspiring jargon will not entice users to click.
                    </li>
                    <div style="height: 40px !important;"></div>
                    <li>
                        Do NOT relegate Nest Egg Guru apps to any page other than the HOME page. Advisors may additionally feature the applications on a “CLIENT RESOURCES” page, but should definitely avoid placing them on pages that receive very little traffic..
                    </li>
                </ul>
            </div>
        </b-modal>
        <b-modal size="lg" ref="ModalRefs7" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal7">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Have you turned on the Lead Generation functionality? </p>
                <p class="modal-content">
                    If lead generation is part of your objective in subscribing to Nest Egg Guru, it is important that this feature be turned on. When it is activated, it can be an un-intrusive way to collect names and email addresses of people who visit your site and run the college and/or retirement planning apps. Here are a couple of important points to keep in mind with respect to Nest Egg Guru’s lead gen capabilities:
                </p>
                <ul class="modal-ul">
                    <li>
                        In order for the lead gen tool to work, the planning apps must be incorporated into your website. If no one knows you have the apps, they will not generate any leads!
                    </li>
                    <li>
                        Since your HOME page attracts the most organic traffic, Nest Egg Guru’s planning apps will be most effective for lead gen when they are featured on your HOME page.
                    </li>
                    <li>
                        If your website is dated, poorly designed, and/or attracts very little organic traffic, Nest Egg Guru’s lead gen functionality will be limited in its effect.
                    </li>
                </ul>
            </div>
        </b-modal>
        <b-modal size="lg" ref="ModalRefs8" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal8">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Are you promoting your Nest Egg Guru app subscriptions in your blog, newsletter, and/or social media outlets? </p>
                <p class="modal-content">
                    Nest Egg Guru’s apps can be a powerful inbound marketing tool and a great way to establish your expertise and set your practice apart. All subscribers are encouraged to feature their subscriptions in their communications with clients and the public. The following are examples of taglines that may be incorporated into your social media marketing and that may be useful in attracting traffic to your website:
                </p>
                <ul class="modal-ul">
                    <li>
                        “If things go badly in the markets will you still be okay? Test Your Preparedness” (include link to your apps).
                    </li>
                    <li>
                        “Does your financial advisor’s retirement spending app allow you to test different withdrawal methodologies? Ours does - Test Your Preparedness” (include link to your apps).
                    </li>
                    <li>
                        “Does your retirement spending simulation software show you remaining balance data in 5 year increments? Ours does - Test Your Preparedness.
                    </li>
                </ul>
            </div>
        </b-modal>
        <b-modal size="lg" ref="ModalRefs9" hide-header hide-footer>

            <div style="padding:0 30px 20px;" class="d-block">
                <a href="#" class="close-modal" @click="hideModal9">
                    <i class="far fa-times-circle"></i>
                </a>
                <p class="modal-title">Are you actively using Nest Egg Guru’s college and retirement planning apps with clients in your office or remotely via screensharing?  </p>
                <p class="modal-content">
                    While Nest Egg Guru’s applications are all designed to be 100% client facing and are intuitive enough for new site visitors and clients alike to use them on their own, the highest and best use of the college and retirement planning apps is as a tool for you to use with your clients. Most clients today want their financial advisor to help educate them and engage them in the planning process. Conversely, clients are increasingly disinterested in being presented with long, boiler plate printouts from traditional financial planning software. Nest Egg Guru’s planning apps make it easy to show clients how changing different variables one at a time can impact their results. The apps are intended to be run multiple times in a single session with you guiding the client or prospective client through the simulation results. FAs who use Nest Egg Guru in this fashion routinely report that it strengthens the advisor-client relationship and helps set their practices apart.
                </p>
            </div>
        </b-modal>

        <div class="subs-date-area">
            <p class="text-right">Your subscription(s) will renew on <a href="#">dd/mm/yyyy</a></p>
        </div>
        <div class="welcome-content">
            <h2>Optimize your subscription(s)</h2>
            <p>Use the checklist below to determine if you are optimizing your Nest Egg Guru subscription(s). Click on
                each box that applies to your situation.</p>
            <span>Profile Strength: <strong v-if="counter <= 4">Weak</strong><strong v-if="counter <=7 && counter > 4">Intermediate</strong><strong v-if="counter <=10 && counter > 7">Strength</strong></span>
        </div>

        <div class="timeline-row">
            <div class="timeline-wrap">
                <div class="timeline-active-0">
                <div class="outer-dot active">
                    <span class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                 <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                <div class="end-dot outer-dot">
                    <span style="color:#ffffff;" class="inner-dot"></span>
                </div>
                </div>
            </div>
        </div>

        <div class="checkbox-area">
            <h4>WEBSITE OPTMIZATION</h4>
            <div class="form-group">
                <input v-model="checkbox[1]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(2,profileItems[0].id)"/>
                <label>{{ profileItems[0].description }}<a href="#" @click="showModal"> Learn more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[2]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(3,profileItems[1].id)"/>
                <label>{{ profileItems[1].description }}<a
                        href="#"  @click="showModal2"> Learn more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[3]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(4,profileItems[2].id)"/>
                <label>{{ profileItems[2].description }}<a href="#" @click="showModal3"> Learn more…</a></label>
            </div>
        </div>
        <div class="checkbox-area">
            <h4>NEST EGG GURU OPTIMIZATION</h4>
            <div class="form-group">
                <input v-model="checkbox[4]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(5,profileItems[3].id)"/>
                <label>{{ profileItems[3].description }}<a href="#"  @click="showModal4"> Learn more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[5]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(6,profileItems[4].id)"/>
                <label>{{ profileItems[4].description }}<a href="#" @click="showModal5"> Learn more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[6]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(7,profileItems[5].id)"/>
                <label>{{ profileItems[5].description }} <a href="#" @click="showModal6"> Learn
                    more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[7]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(8,profileItems[6].id)"/>
                <label>{{ profileItems[6].description }}<a href="#" @click="showModal7"> Learn more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[8]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(9,profileItems[7].id)"/>
                <label>{{ profileItems[7].description }}<a href="#"  @click="showModal8"> Learn
                    more…</a></label>
            </div>
            <div class="form-group">
                <input v-model="checkbox[9]" class="styled-checkbox" name="modern_design" type="checkbox" ref="mycheckbox" @click="somefunction(10,profileItems[8].id)"/>
                <label>{{ profileItems[8].description }}<a href="#" @click="showModal9"> Learn more…</a></label>
            </div>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /sr
    import HelloWorld from "@/components/HelloWorld.vue";
    import Header from '@/components/backend/header/Header.vue';
    import Footer from '@/components/backend/footer/Footer.vue';
    import axios from 'axios';

    export default {
        mounted() {
            axios.get('/be/api/profileitems').then(res => {
                this.profileItems = res.data.map((e)=>{
                    return e;
                });
            });

            axios.get('/be/api/profileitems/getCurrentUserItemIds').then(res => {
                res.data.map((r) => {
                    this.checkbox[r] = true;
                    var activeClass = $(".timeline-wrap .timeline-active-"+ this.counterMinus +"");
                    activeClass.removeClass("timeline-active-"+ this.counterMinus +"");
                    activeClass.addClass("timeline-active-"+ this.counter +"");
                    this.counter++;
                    $(".timeline-wrap .outer-dot:nth-child("+ this.counter +")").toggleClass("active");
                    var span = $(".timeline-wrap .outer-dot:nth-child("+ this.counter +")").find("span");
                    span.toggleClass("inner-dot fa fa-check");
                    this.counterMinus++;
                })

            });

        },

        data: () => {
            return {
                counterMinus:0,
                counter:1,
                profileItems: [{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },{
                    description: "",
                    disabled: false,
                    id: 1,
                },],
                checkbox: {
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                }
            }
        },

        methods: {
            showModal() {
                this.$refs.myModalRef.show();
            },
            hideModal() {
                this.$refs.myModalRef.hide()
            },
            showModal2() {
                this.$refs.ModalRef.show();
            },
            hideModal2() {
                this.$refs.ModalRef.hide()
            },
            showModal3() {
                this.$refs.ModalRefs.show();
            },
            hideModal3() {
                this.$refs.ModalRefs.hide()
            },
            showModal4() {
                this.$refs.ModalRefs4.show();
            },
            hideModal4() {
                this.$refs.ModalRefs4.hide()
            },
            showModal5() {
                this.$refs.ModalRefs5.show();
            },
            hideModal5() {
                this.$refs.ModalRefs5.hide()
            },
            showModal6() {
                this.$refs.ModalRefs6.show();
            },
            hideModal6() {
                this.$refs.ModalRefs6.hide()
            },
            showModal7() {
                this.$refs.ModalRefs7.show();
            },
            hideModal7() {
                this.$refs.ModalRefs7.hide()
            },
            showModal8() {
                this.$refs.ModalRefs8.show();
            },
            hideModal8() {
                this.$refs.ModalRefs8.hide()
            },
            showModal9() {
                this.$refs.ModalRefs9.show();
            },
            hideModal9() {
                this.$refs.ModalRefs9.hide()
            },
            handleToggle() {
                if(this.pageVisible == false) {
                    this.pageVisible = true;
                }
                else {
                    this.pageVisible = false;
                }
            },
            somefunction(id, Pi_id){
                if(!this.checkbox[Pi_id] == true) {
                    var activeClass = $(".timeline-wrap .timeline-active-"+ this.counterMinus +"");
                    activeClass.removeClass("timeline-active-"+ this.counterMinus +"");
                    activeClass.addClass("timeline-active-"+ this.counter +"");
                    this.counter++;
                    $(".timeline-wrap .outer-dot:nth-child("+ this.counter +")").toggleClass("active");
                    var span = $(".timeline-wrap .outer-dot:nth-child("+ this.counter +")").find("span");
                    span.toggleClass("inner-dot fa fa-check");
                    this.counterMinus++
                }
                else{
                    $(".timeline-wrap .outer-dot:nth-child("+ this.counter +")").toggleClass("active");
                    var span = $(".timeline-wrap .outer-dot:nth-child("+ this.counter +")").find("span");
                    span.toggleClass("inner-dot fa fa-check");
                    this.counter--;
                    this.counterMinus--;
                    var activeClass = $(".timeline-wrap .timeline-active-"+ this.counter +"");
                    activeClass.removeClass("timeline-active-"+ this.counter +"");
                    activeClass.addClass("timeline-active-"+ this.counterMinus +"");
                }
                axios.post(`/be/api/profileitems/setCurrentUser?itemId=${Pi_id}&set=${!this.checkbox[Pi_id]}`).then(res => {
            });
            }
        },
        name: "welcome",
        components: {
            HelloWorld,
            Header,
            Footer
        }
    };

</script>

<style src="./welcome.scss" lang="scss"></style>
