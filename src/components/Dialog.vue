<template>
  <div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            @close="closeCallback"
            >
            <span slot="title"><slot></slot></span>
            <el-form
                ref="form"
                :rules="rules"
                label-position="right" 
                label-width="100px" 
                :model="queryForm"
            >
                <el-form-item label="名称:" prop="name">
                    <el-input v-model.trim="queryForm.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="活动区域:" prop="region">
                    <el-input v-model.trim="queryForm.region" clearable></el-input>
                </el-form-item>
                <el-form-item label="活动形式:" prop="type">
                    <el-input v-model.trim="queryForm.type" clearable></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="$emit('update:dialogVisible', false)">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
    props: {
        dialogVisible: {
            required: false,
            type: Boolean,
            default: () => { return false }
        }
    },
    data() {
        return {
            queryForm: {
                name: '',
                region: '',
                type: '',
            },
            rules:{
                name: [
                    { required: true, message: '名称不能为空', trigger: 'change' },
                ],
                region: [
                    { required: true, message: '活动区域不能为空', trigger: 'change' },
                ],
                type: [
                    { required: true, message: '活动形式不能为空', trigger: 'change' },
                ],
            }
        }
    },
    methods: {
        handleClose() {
            this.$emit('update:dialogVisible', false)
        },
        closeCallback() {
            this.queryForm = {}
            this.$refs.form.clearValidate()
        },
        handleSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.queryForm)                        
                    this.$emit('update:dialogVisible', false)
                }
            })
        }
    },
}
</script>

<style>

</style>