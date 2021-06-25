<template>
    <div class="container">
        <p class="headline font-weight-light">Forgot Your Password?</p>
        <h4 class="mt-5">Retrieve your password here.</h4>
        <p class="subtitle-1 font-weight-light mt-3 mb-0">Please enter your email address below. You will receive a link to reset your password.</p>
        
        <v-divider></v-divider>
        
        <!-- email -->
        <v-col md="4" sm="6" cols="12">
            <v-text-field
                v-model="email"
                label="Email Address"
                outlined
                dense
                :rules="[rules.required, rules.email]"
            ></v-text-field>
        </v-col>

        <v-row></v-row>

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Forgot Your Password'
        }
    },
    data() {
        return {
            email: '',
            rules: {
                required: (v) => !!v || 'This field required.',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
            },
        }
    },
}
</script>

<style>
</style>