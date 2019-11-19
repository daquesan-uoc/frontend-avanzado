import {Injectable} from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';

import { AppState } from 'src/app/shared/state/root.reducer';
import { UserActions } from '../../../../shared/state/user';
import { ProfileService } from '../../../../shared/services/profile.service';
import { Observable, of } from 'rxjs';
import { UserActionsTypes } from '../../../../shared/state/user/actions/user.actions';

@Injectable()
export class UserEffects {
    constructor (
        private actions$: Actions,
        private userActions: UserActions,
        private profileService: ProfileService
    ) {}
/*
    @Effect() saveUser$ = this.update$
        .ofType(UserActions.SAVE_USER)
        .map(action => action.payload)
        .map(hero => this.userActions.saveHeroSuccess(hero));*/
/*
    saveUser$ = createEffect(
      () => this.update$.pipe(
              ofType(UserActions.SAVE_USER),
              map(action => action.payload),
              map(user => this.userActions.saveUserSuccess(user))
            )
      );*/
      @Effect()
      updatePokemon$: Observable<any> = this.actions$.pipe(
        ofType(UserActionsTypes.SaveUser),
        switchMap(({ user }) =>
          this.profileService.updateProfile(user).pipe(
            map(() => this.userActions.saveUserSuccess(user))
          )
        )
      );
    

}
