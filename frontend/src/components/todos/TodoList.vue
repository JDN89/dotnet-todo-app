<script setup lang="ts">
import { useTodoStore } from "~/stores/todos";

const { t } = useI18n();

const todoStore = useTodoStore();

const deleteList = (listId: number) => {
  todoStore.deleteList(listId);
};
const archiveTask = (listId: number, todo: string) => {
  todoStore.archiveTask(listId, todo);
};
const unArchiveTask = (listId: number, todo: string) => {
  todoStore.unArchiveTask(listId, todo);
};
</script>

<template>
  <div
    id="List"
    class="container sm:flex mx-auto sm:flex-wrap sm:flex-grow-0 sm:flex-none sm: justify-center"
  >
    <!-- <div class="mx-auto"> -->
    <masonry
      :cols="{ default: 5, 1280: 4, 1192: 3, 840: 2, 520: 1 }"
      :gutter="{ default: '20px', 700: '15px', 500: '0px' }"
      class="mx-auto container justify-center"
    >
      <div
        v-for="list in todoStore.getLists"
        :key="list.listId"
        class="msg hover max-h-screen-lg overflow-auto"
      >
        <button :title="t('button.edit')" class="float-right hover">
          <carbon-edit @click="todoStore.changeList(list)" />
        </button>
        <div class="title prose">
          <h3>
            {{ list.title }}
          </h3>
        </div>
        <hr class="hr max-w-27 pb-3" />
        <div class="todos">
          <ul>
            <div class="relative">
              <li v-for="todo in list.todos" :key="todo">
                <carbon-checkbox
                  @click="archiveTask(list.listId, todo)"
                  class="mr-2 my-auto hover"
                />{{ todo }}
              </li>
            </div>
          </ul>
        </div>

        <hr class="m-2" />

        <div class="archived">
          <ul>
            <li
              v-for="archived in list.archived"
              :key="archived"
              class="flex justify-left items-start"
            >
              <carbon-checkbox-checked
                @click="unArchiveTask(list.listId, archived)"
                class="mr-2 my-auto hover"
              />

              {{ archived }}
            </li>
          </ul>
        </div>
        <button
          :title="t('button.delete')"
          @click="deleteList(list.listId)"
          class="float-right"
        >
          <carbon-trash-can class="float-right hover" />
        </button>
      </div>
    </masonry>
  </div>
</template>

<route lang="yaml">
meta:
  layout: dashboard
</route>

<style scoped>
.todos,
.archived {
  text-align: left;
}

.list {
  overflow-wrap: break-word;
  overflow: hidden;
}
</style>
