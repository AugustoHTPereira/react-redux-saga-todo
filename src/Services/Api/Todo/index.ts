import { Todo } from "../../../Models";
import instance from "..";

class TodoApiService {
  async deleteAsync(id: string | number): Promise<void> {
    await instance.delete(`/todos/${id}`);
    return new Promise<void>((res) => res());
  }

  async getAsync(): Promise<Todo[]> {
    const data = await instance.get<Todo[]>("/todos").then((res) => res.data);

    await setTimeout(() => {
      return data;  
    }, 2000);

    return data;
  }

  async getOneAsync(id: string | number): Promise<Todo> {
    return await instance.get<Todo>(`/todos/${id}`).then((res) => res.data);
  }

  async updateAsync(id: string | number, model: Todo): Promise<Todo> {
    await instance.put(`/todos/${id}`, model);
    return new Promise<Todo>((res) => res(model));
  }

  async createAsync(model: Todo): Promise<Todo> {
    const response = await instance.post<number>("/todos", model);
    model.id = response.data;
    return new Promise<Todo>((res) => res(model));
  }
}

export default new TodoApiService();
