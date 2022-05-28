import { Example } from "../infra/typeorm/entities/Example";
import { ICreateExampleDTO } from "../useCases/createExample/ICreateExampleDTO";

interface IExampleRepository {
  create(data: ICreateExampleDTO): Promise<void>;
  findByEmail(email: string): Promise<Example>;
  findByName(name: string): Promise<Example>;
}

export { IExampleRepository };
