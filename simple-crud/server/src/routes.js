import { Router } from 'express';

import * as tasksCtrl from '../controllers/taskController';

const router = Router();

router.get('/', tasksCtrl.getTasks);
router.post('/', tasksCtrl.createTask);
router.put('/:id', tasksCtrl.editTask);
router.delete( '/:id', tasksCtrl.deleteTask);

export default router;
