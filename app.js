    const app=Vue.createApp({
    data(){
        return{
            Myage:'35',
            courseGoalA:'Finish the course and learn vue!',
            courseGoalB:'Master in vue and build amazing apps',                                                                                                                                
        };
    },
    methods:{
        age(){ 
            let age = 35;
            return age;
        },
                outputGoal(){
            const randomNumber = Math.random();
            return randomNumber;
            }
        }
    });
app.mount('#user-goal');