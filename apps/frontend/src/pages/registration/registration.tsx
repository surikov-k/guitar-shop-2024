import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, AuthStatus } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useForm } from 'react-hook-form';
import { RegisterData } from '../../types';
import { AuthData } from '../../types/auth-data';
import { loginAction, registerAction } from '../../store/api-actions';


export function Registration(): JSX.Element {

  const { authStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });

  useEffect(() => {
    console.log('authStatus', authStatus);
    if (authStatus === AuthStatus.Auth) {
      navigate(AppRoute.ItemsList);
    }
  }, [authStatus, navigate]);

  const registerSubmitHandler = (data: unknown) => {
    dispatch(registerAction(data as RegisterData));
  };

  return (
    <main className="page-content">
      <div className="container">
        <section className="login">
          <h1 className="login__title">Регистрация</h1>
          <form onSubmit={handleSubmit(registerSubmitHandler)}>
            <div className="input-login">
              <label htmlFor="name">Введите имя</label>
              <input
                type="text"
                id="name"
                {...register('name', {
                  required: 'Заполните поле',
                  minLength: {
                    value: 1,
                    message: 'Минимум 1 символов'
                  },
                  maxLength: {
                    value: 15,
                    message: 'Максимум 15 символов'
                  }
                })}
                autoComplete="off" />
              {errors.name && (
                <p className="input-login__error">{errors.name.message as string}</p>
              )}
            </div>
            <div className="input-login">
              <label htmlFor="email">Введите e-mail</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Заполните поле',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректный и-мейл'
                  }
                })}
                autoComplete="off"
              />
              {errors.email && (
                <p className="input-login__error">{errors.email.message as string}</p>
              )}
            </div>
            <div className="input-login">
              <label htmlFor="password">Придумайте пароль</label><span>
                  <input
                    type="password"
                    placeholder="• • • • • • • • • • • •"
                    id="password"
                    {...register('password', {
                      required: 'Заполните поле',
                      minLength: {
                        value: 6,
                        message: 'Минимум 6 символов'
                      },
                      maxLength: {
                        value: 12,
                        message: 'Максимум 12 символов'
                      }
                    })}
                    autoComplete="off"
                  />
                  <button className="input-login__button-eye"
                          type="button">
                    <svg width="14"
                         height="8"
                         aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
              {errors.password && (
                <p className="input-login__error">{errors.password.message as string}</p>
              )}
            </div>
            <button className="button login__button button--medium"
                    type="submit">Зарегистрироваться
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

