import React from 'react';
import {useForm} from 'react-hook-form';
import {Input, Button} from 'src/components/common/common';
import {getResolver} from 'src/helper/helper';
import {useDispatch} from 'react-redux';
import {authAction} from 'src/store/actions';
import {
  auth as authSchema,
} from 'src/validation-schemas/validation-schemas';
import {
  ButtonTypes,
  AuthPayloadKey,
  InputTypes,
} from 'src/common/enums/enums';
import styles from './styles.module.scss';

function Auth() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: getResolver(authSchema),
  });

  const dispatch = useDispatch();

  const handleRegister = (authPayload) => {
    dispatch(authAction.register({authPayload}));
    reset();
  };

  const handleLogin = (authPayload) => {
    dispatch(authAction.login({authPayload}));
    reset();
  };

  return (
    <div className={styles.authForm}>
      <form className={styles.form}>
        <Input
          name={AuthPayloadKey.EMAIL}
          label="Email"
          errors={errors}
          register={register}
          type={InputTypes.EMAIL}
          className={styles.email}
        />
        <Input
          name={AuthPayloadKey.PASSWORD}
          label="Password"
          errors={errors}
          register={register}
          type={InputTypes.PASSWORD}
          className={styles.password}
        />
        <Button
          label="Login"
          type={ButtonTypes.BUTTON}
          className={styles.login}
          onClick={handleSubmit(handleLogin)}
        />
        <Button
          label="Register"
          type={ButtonTypes.BUTTON}
          className={styles.register}
          onClick={handleSubmit(handleRegister)}
        />
      </form>
    </div>
  );
}

export default Auth;
