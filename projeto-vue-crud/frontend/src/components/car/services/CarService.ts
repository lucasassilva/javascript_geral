import axios from "axios";
import Car from "../car.model";

export default class CarService {
  private baseUrl = "http://localhost:3001";

  public get(): Promise<any> {
    return axios.get(this.baseUrl + "/cars");
  }

  public post(car: Car): Promise<any> {
    return axios.post(this.baseUrl + "/cars", car);
  }

  public delete(id: number): Promise<any> {
    return axios.delete(this.baseUrl + "/cars/" + id);
  }

  public put(id: number, car: Car): Promise<any> {
    return axios.put(this.baseUrl + "/cars/" + id, car);
  }
}
