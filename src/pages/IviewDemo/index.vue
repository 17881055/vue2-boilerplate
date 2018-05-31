<style scoped>
    .layout {
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    }
    .layout-logo {
      width: 100px;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
    }
    .layout-nav {
      width: 420px;
      margin: 0 auto;
      margin-right: 20px;
    }
    .layout-footer-center {
      text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                        </MenuItem>
                        <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                        </MenuItem>
                        <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                        </MenuItem>
                        <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </template>
                                    <MenuItem name="1-1">Option 1</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </template>
                                    <MenuItem name="2-1">Option 1</MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                                <FormItem label="Name" prop="name">
                                    <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                                </FormItem>
                                <FormItem label="E-mail" prop="mail">
                                    <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                                </FormItem>
                                <FormItem label="City" prop="city">
                                    <Select v-model="formValidate.city" placeholder="Select your city">
                                        <Option value="beijing">New York</Option>
                                        <Option value="shanghai">London</Option>
                                        <Option value="shenzhen">Sydney</Option>
                                    </Select>
                                </FormItem>
                                <FormItem label="Date">
                                    <Row>
                                        <Col span="11">
                                        <FormItem prop="date">
                                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                        </FormItem>
                                        </Col>
                                        <Col span="2" style="text-align: center">-</Col>
                                        <Col span="11">
                                        <FormItem prop="time">
                                            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                        </FormItem>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="Gender" prop="gender">
                                    <RadioGroup v-model="formValidate.gender">
                                        <Radio label="male">Male</Radio>
                                        <Radio label="female">Female</Radio>
                                    </RadioGroup>
                                </FormItem>
                                <FormItem label="Hobby" prop="interest">
                                    <CheckboxGroup v-model="formValidate.interest">
                                        <Checkbox label="Eat"></Checkbox>
                                        <Checkbox label="Sleep"></Checkbox>
                                        <Checkbox label="Run"></Checkbox>
                                        <Checkbox label="Movie"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                                <FormItem label="Desc" prop="desc">
                                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                </FormItem>
                            </Form>

                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center"></Footer>
        </Layout>
    </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
