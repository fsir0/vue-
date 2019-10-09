<template>
    <div class="userspage">
        <h1>usermsg</h1>
        <p>在这里添加用户信息</p>
        <form @submit="subadd">
            <input type="text" v-model="newuser.name" placeholder="输入名字" required="rquired" />
            <input type="email" v-model="newuser.email" placeholder="输入邮箱地址" required="required" />
            <input type="submit" value="添加" />
        </form>
        <ul>
            <li v-for="user in users" :key="user">
                <!--v-model="use.contacted":选中时候变成true;可在dele函数中打印验证-->
                <input type="checkbox" v-model="user.contacted" />
                <span :class="{contacted: user.contacted}">{{ user.name }} : {{ user.email}}</span>
                <button @click="deleuser(user)">X</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newuser: {},
            users: [
                {
                    name: "jone",
                    email: "jone@mail.com",
                    contacted: false
                },
                {
                    name: "macial",
                    email: "macial@mail.com",
                    contacted: false
                },
                {
                    name: "mara",
                    email: "mara@mail.com",
                    contacted: false
                },
                {
                    name: "hanli",
                    email: "hanli@mail.com",
                    contacted: false
                }
            ]
        };
    },
    methods: {
        subadd(e) {
            e.preventDefault();
            let len = this.users.length,
                flag = 0;
            for (let i = 0; i < len; i++) {
                if (this.newuser.email == this.users[i].email) {
                    flag++;
                }
            }
            if (!flag) {
                this.users.push({
                    name: this.newuser.name,
                    email: this.newuser.email,
                    contacted: false
                });
                this.newuser = {};
            } else {
                alert("已经有了这个地址了，请检查(修改)你的地址");
            }
        },
        deleuser(e) {
            //console.log(e.contacted)
            this.users.splice(this.users.indexOf(e), 1);
        }
    }
};
</script>
<style scoped>
.userspage {
    position: relative;
    width: 100%;
    text-align: center;
    font-weight: normal;
    font-family: "微软雅黑";
}
.userspage form {
    margin: 15px 0 20px;
    text-align: center;
}
.userpage form input {
    height: 30px;
}
.userspage ul li {
    line-height: 20px;
}
.userspage ul li .contacted {
    text-decoration: line-through;
    color: #aaa;
}
.userspage ul li button {
    width: 15px;
    height: 15px;
}
</style>
