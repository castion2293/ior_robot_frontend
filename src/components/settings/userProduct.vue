<template>
    <v-app>
        <loader v-if="loading"></loader>
        <sucessSnackbar></sucessSnackbar>
        <failureSnackbar></failureSnackbar>

        <v-container grid-list-lg text-xs-center class="mt-5">
            <v-layout row wrap>
                <v-flex xs12 sm12 md6>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline"><strong>產品資料</strong></div>
                        </v-card-title>
                        <v-card-text class="grey lighten-4">
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-form v-model="valid_1" ref="form_1" lazy-validation>
                                    <v-text-field
                                            label="產品名稱"
                                            v-model="name"
                                            :rules="nameRules"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            label="產品分類"
                                            v-model="group"
                                            :rules="groupRules"
                                            required
                                    ></v-text-field>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                :disabled="!valid_1"
                                                @click.prevent="productSubmit"
                                                color="primary"
                                        >
                                            確認
                                        </v-btn>
                                        <v-btn @click="productClear">清除</v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md6>
                    <v-card>
                        <v-card-title primary-title>
                            <div class="headline"><strong>產品圖片</strong></div>
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
            </v-layout>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'
    import loader from '../loader'
    import sucessSnackbar from '../successSnackbar'
    import failureSnackbar from '../failureSnackbar'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "user-product",
        props: ['product_id'],
        data () {
            return {
                valid_1: true,
                name: '',
                group: '',
                avatar: '',
                nameRules: [
                    (v) => !!v || '必須填入產品名稱',
                ],
                groupRules: [
                    (v) => !!v || '必須填入產品分類',
                ],
            }
        },
        components: {
            drawer,
            loader,
            sucessSnackbar,
            failureSnackbar
        },
        computed: {
            ...mapGetters([
                'loading',
                'reset_product'
            ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            this.$store.dispatch('getResetProduct', this.product_id)

            setTimeout(() => {
                this.name = this.reset_product.name
                this.group = this.reset_product.group
                this.avatar = this.reset_product.photo
            }, 2000)
        },
        methods: {
            ...mapActions([
                'resetProductProfile',
                'resetProductAvatar'
            ]),
            productSubmit () {
                if (this.$refs.form_1.validate()) {
                    this.resetProductProfile({
                        id: this.reset_product.id,
                        name: this.name,
                        group: this.group
                    })
                }
            },
            productClear () {
                this.$refs.form_1.reset()
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
                this.resetProductAvatar({
                    avatar: this.avatar,
                    id: this.reset_product.id
                })
            }
        }
    }
</script>

<style scoped>

</style>