import { Router } from 'express';
import * as GitUserController from '../controllers/gitUsers.controller';
const router = new Router();

// Add a new git users
router.route('/git-users').post(GitUserController.addGitUser);

// Search users on github
router.route('/git-search').post(GitUserController.searchUsersRepoGit);

export default router;
