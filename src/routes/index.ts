import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', searchController.search);

export default router;