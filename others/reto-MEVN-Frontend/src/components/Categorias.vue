<template>
  <v-data-table
    :headers="headers"
    :items="categorias"
    :loading="cargando"
    loading-text="Cargando Por Favor Espere"
    sort-by="rol"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista de Categorias</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Agregar Categoria
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Categoria"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-textarea
                  v-model="editedItem.descripcion"
                  label="Descripcion"
                ></v-textarea>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Confirmar Cambio de Estado?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Confirmar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-eye-check-outline
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';

export default {
    name: "CategoriasComponent",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      cargando: true,
      headers: [
        { text: 'Id', align: 'start',value: 'id' },
        {
          text: 'Categoria',
          sortable: true,
          value: 'nombre',
        },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Estado', value: 'estado' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      categorias: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        nombre: '',
        descripcion: '',
        estado: 0,
      },
      defaultItem: {
        id: '',
        nombre: '',
        descripcion: '',
        estado: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Categoria' : 'Editar Categoria'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {

      list() {
        this.cargando = true;
        axios.get("http://localhost:3000/api/categoria/list")
          .then(res => {
             this.categorias = res.data;
             this.cargando = false;
          })
          .catch( e => {
            return e
          })
      },

      initialize () {
        this.list()
      },

      editItem (item) {
        this.editedIndex = this.categorias.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.editedItem.password = ""
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.categorias.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        if(this.editedItem.estado === 1){
          axios.put("http://localhost:3000/api/categoria/deactivate", {id: this.editedItem.id})
          .then(()=>{
            this.closeDelete()
          })
        } else {
          axios.put("http://localhost:3000/api/categoria/activate", {id: this.editedItem.id})
          .then(()=>{
            this.closeDelete()
          })
        }
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.list()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.list()
      },

      save () {
        if(this.editedIndex > -1){
          let objetoEditar = {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            estado: this.editedItem.estado,
          }
          axios.put("http://localhost:3000/api/categoria/update", objetoEditar)
          .then(() => {
            this.close()
          })
        } else {
          let objetoGuardar = {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            estado: this.editedItem.estado,
          }
          axios.post("http://localhost:3000/api/categoria/add", objetoGuardar)
          .then(() => {
            this.close()
          })
        }
      },
    },
}
</script>
