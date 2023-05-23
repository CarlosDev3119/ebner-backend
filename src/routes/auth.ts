import { Router } from 'express';
import { validateFields } from '../middlewares/validateFields';
import { LoginSchema } from '../models/schema/schemaUsers';
import { loginUser, validate } from '../controllers/loginUser';
import { validateJWT } from '../middlewares/validate-JWT';





const router: Router = Router();

// router.post('/new', [
//     check('name', 'name is required').not().isEmpty(),
//     check('email', 'email is required').isEmail(),
//     check('email').custom(isEmailValid),
//     check('password', 'The password must have a minimum of 6 characters').isLength({ min:6 }),
//     validarCampos
// ],createUser );

//login
router.post('/',[
    validateFields(LoginSchema)
], loginUser );

router.get('/renew',[
    validateJWT(),
], validate);



export  { router };