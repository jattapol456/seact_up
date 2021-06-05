import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    president: '',
    id: '',
    email: '',
    clubname: '',
    oldclub: '',
    newclub: '',
    category1: '',
    category2: '',
    category3: '',
    category4: '',
    category5: '',
    positionclub: '',
    name: '',
    board: '',
    branch: '',
    year: '',
    gpa: '',
    phonenumber: ''
  },
  mutations: {
    EAR(state, we) {
      state.president = we[0]
      state.id = we[1]
      state.email = we[2]
      state.clubname = we[3]
      state.oldclub = we[4]
      state.newclub = we[5]
      state.category1 = we[6]
      state.category2 = we[7]
      state.category3 = we[8]
      state.category4 = we[9]
      state.category5 = we[10]
      state.positionclub = we[11]
      state.name = we[12]
      state.board = we[13]
      state.branch = we[14]
      state.year = we[15]
      state.gpa = we[16]
      state.phonenumber = we[17]
    }
  },
  actions: {
    information(context, we) {
      context.commit('INFORMATION', we )
    }
  },
  getters: {
    getterPRESIDENT(state){
      return state.president
    },
    getterID(state){
      return state.id
    },
    getterEMAIL(state){
      return state.email
    },
    getterCLUBNAME(state){
      return state.clubname
    },
    getterOLDCLUB(state){
      return state.oldclub
    },
    getterNEWCLUB(state){
      return state.newclub
    },
    getterCATEGORY1(state){
      return state.category1
    },
    getterCATEGORY2(state){
      return state.category2
    },
    getterCATEGORY3(state){
      return state.category3
    },
    getterCATEGORY4(state){
      return state.category4
    },
    getterCATEGORY5(state){
      return state.category5
    },
    getterPOSITIONCLUB(state){
      return state.positionclub
    },
    getterBOAED(state){
      return state.board
    },
    getterBRANCH(state){
      return state.branch
    },
    getterYEAR(state){
      return state.year
    },
    getterGPA(state){
      return state.gpa
    },
    getterPHONENUMBER(state){
      return state.phonenumber
    },
    getterNAME(state){
      return state.name
    }
  }
})
