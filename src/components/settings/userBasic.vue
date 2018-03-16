<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container grid-list-lg text-xs-center class="mt-5">
            <v-layout row wrap>
                <v-flex xs12 sm12 md4>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline"><strong>個人圖像</strong></div>
                        </v-card-title>
                        <v-card-text class="grey lighten-4">
                            <img ref="Image" :src="avatar" style="width:80%">
                        </v-card-text>
                        <v-card-actions>
                            <input type="file" ref="myFile" name="image" @change="getImage" style="display:none;">
                            <v-spacer></v-spacer>
                            <v-btn @click="uploadImage" color="primary">上傳</v-btn>
                            <v-btn @click.native="$refs.myFile.click()">選擇相片</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md4>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline"><strong>基本資料</strong></div>
                        </v-card-title>
                        <v-card-text class="grey lighten-4">
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-form v-model="valid_1" ref="form_1" lazy-validation>
                                    <v-text-field
                                            label="姓名"
                                            v-model="name"
                                            :rules="nameRules"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            label="電子郵件"
                                            v-model="email"
                                            :rules="emailRules"
                                            required
                                    ></v-text-field>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                :disabled="!valid_1"
                                                @click="profileSubmit"
                                                color="primary"
                                        >
                                            確認
                                        </v-btn>
                                        <v-btn @click="profileClear">清除</v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md4>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline"><strong>密碼重設</strong></div>
                        </v-card-title>
                        <v-card-text class="grey lighten-4">
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-form v-model="valid_2" ref="form_2" lazy-validation>
                                    <v-text-field
                                            label="輸入舊密碼"
                                            v-model="old_password"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'text' : 'password'"
                                            counter
                                    ></v-text-field>
                                    <v-text-field
                                            label="輸入新密碼"
                                            v-model="new_password"
                                            :append-icon="e2 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e2 = !e2)"
                                            :type="e2 ? 'text' : 'password'"
                                            counter
                                    ></v-text-field>
                                    <v-text-field
                                            label="確認新密碼"
                                            v-model="confirm_password"
                                            :append-icon="e3 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e3 = !e3)"
                                            :type="e3 ? 'text' : 'password'"
                                            counter
                                    ></v-text-field>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                :disabled="!valid_2"
                                                @click="passwordSubmit"
                                                color="primary"
                                        >
                                            確認
                                        </v-btn>
                                        <v-btn @click="passwordClear">清除</v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'
    import loader from '../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "user-basic",
        data () {
            return {
                valid_1: true,
                valid_2: true,
                name: '',
                email: '',
                avatar: '',
                e1: false,
                e2: false,
                e3: false,
                old_password: '',
                new_password: '',
                confirm_password: '',
                nameRules: [
                    (v) => !!v || '必須填入姓名',
                ],
                emailRules: [
                    (v) => !!v || '必須填入Email',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || '必須是Email格式'
                ],
            }
        },
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'user',
                'loading'
            ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            setTimeout(() => {
                this.name = this.user.name
                this.email = this.user.email
                this.avatar = this.user.photo

                this.$store.dispatch('takeLoading', false)
            }, 2000)
        },
        methods: {
            profileSubmit () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    // axios.post('/api/submit', {
                    //     name: this.name,
                    //     email: this.email,
                    // })
                }
            },
            profileClear () {
                this.$refs.form_1.reset()
            },
            passwordSubmit () {

            },
            passwordClear () {
                this.$refs.form_2.reset()
            },
            getImage (e) {
                let image = e.target.files[0]
                let reader = new FileReader()
                reader.readAsDataURL(image)
                reader.onload = e => {
                    this.avatar = e.target.result
                }
            },
            uploadImage () {

            }
        }
    }
</script>

<style scoped>

</style>