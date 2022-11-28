import { Router } from "express";
import { UserUseCase } from "../../application/userUserCase";
import { UserController } from "../controller/user.ctrl";
import { MongoRepository } from "../repository/mongo";

const route = Router()
/**
 * Iniciar Repository
 */
const userRepo = new MongoRepository()

/**
 * Iniciamos casos de uso
 */

const userUseCase = new UserUseCase(userRepo)

/**
 * Iniciar User Controller
 */

const userCtrl = new UserController(userUseCase)

/**
 *
 */

route.post(`/user`, userCtrl.insertCtrl)
route.get(`/user`, userCtrl.getCtrl)

export default route