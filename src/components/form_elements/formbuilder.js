import Vue from 'vue';

import draggable from 'vuedraggable'

import TextInput from '@/components/form_elements/FormElementTextInput'
import LongTextInput from '@/components/form_elements/FormElementLongTextInput'
import NumberInput from '@/components/form_elements/FormElementNumberInput'
import SelectList from '@/components/form_elements/FormElementSelectList'
import RadioButton from '@/components/form_elements/FormElementRadioButton'
import Checkbox from '@/components/form_elements/FormElementCheckbox'
import TimePicker from '@/components/form_elements/FormElementTimePicker'
import DatePicker from '@/components/form_elements/FormElementDatePicker'
import DatetimePicker from '@/components/form_elements/FormElementDatetimePicker'
import Rating from '@/components/form_elements/FormElementRating'
import Button from '@/components/form_elements/FormElementButton'
import TextEditor from '@/components/form_elements/FormElementTextEditor'
import Carousel from '@/components/form_elements/FormElementCarousel'

import Elements from '@/components/form_elements/Elements'
import Properties from '@/components/form_elements/Properties'

import _ from 'vue-lodash';

import vm from '@/main'


export const FormBuilder = new Vue({
  components: {
    Elements,
    Properties,
    draggable,
    TextInput,
    LongTextInput,
    NumberInput,
    SelectList,
    RadioButton,
    Checkbox,
    TimePicker,
    DatePicker,
    DatetimePicker,
    Rating,
    Button,
    TextEditor,
    Carousel
  },
  data() {
    return {
      fields: [{
          'name': 'TextInput',
          'text': 'Text',
          'group': 'form', //form group
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': true,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'LongTextInput',
          'text': 'Long Text',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': true,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'NumberInput',
          'text': 'Number',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'SelectList',
          'text': 'Select',
          'group': 'form',
          'hasOptions': true,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'RadioButton',
          'text': 'Radio',
          'group': 'form',
          'hasOptions': true,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'Checkbox',
          'text': 'Checkbox',
          'group': 'form',
          'hasOptions': true,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'TimePicker',
          'text': 'Time Picker',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'DatePicker',
          'text': 'Date Picker',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'DatetimePicker',
          'text': 'Date-Time Picker',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'Rating',
          'text': 'Rating',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'Button',
          'text': 'Button',
          'group': 'button',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': true,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'TextEditor',
          'text': 'Text editor',
          'group': 'static',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 8,
          'labelWidth': 100
        },
        {
          'name': 'Carousel',
          'text': 'Carousel',
          'group': 'static',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isUnique': false,
          'span': 24,
          'labelWidth': 100,
          'controlHeight': 150,
          'itemsNumber': 4,
          'items': [{
            url:''
          }]
        }
      ],

      sortElementOptions: {
        group: {
          name: 'formbuilder',
          pull: false,
          put: true
        },
        sort: true
      },

      dropElementOptions: {
        group: {
          name: 'formbuilder',
          pull: 'clone',
          put: false
        },
        sort: false,
        filter: ".is-disabled"
      }
    }
  },
  methods: {
    deleteElement(index) {
      vm.$store.activeForm = [];
      vm.$store.activeTabForFields = "elements";
      vm.$delete(vm.$store.forms, index);
    },

    cloneElement(index, form) {
      var cloned = _.cloneDeep(form) // clone deep lodash
      vm.$store.forms.splice(index, 0, cloned)
    },

    editElementProperties(form) {
      vm.$store.activeForm = form;
      vm.$store.activeTabForFields = "properties";
    }
  }
});
