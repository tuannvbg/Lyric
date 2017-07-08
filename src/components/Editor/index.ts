import Vue from 'vue'
import Component from 'vue-class-component'
import WithRender from './index.html?style=./index.scss'
import './global.scss'

import { Prop } from 'vue-property-decorator'

@WithRender
@Component
export class Editor extends Vue {}
