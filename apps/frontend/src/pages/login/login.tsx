import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, AuthStatus } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useForm } from 'react-hook-form';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';


export function Login(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authStatus } = useAppSelector((state) => state);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  });

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      navigate(AppRoute.ItemsList);
    }
  }, [authStatus, navigate]);


  const loginSubmitHandler = (data: unknown) => {
    dispatch(loginAction(data as AuthData));
  };

  return (
    <main className="page-content">
      <div className="container">
        <section className="login">
          <h1 className="login__title">Войти</h1>
          <p className="login__text">Hовый пользователь?
            <Link
              to={AppRoute.Registration}
              className="login__link"
            >Зарегистрируйтесь</Link>
                                     прямо сейчас</p>
          <form onSubmit={handleSubmit(loginSubmitHandler)}>
            <div className="input-login">
              <label htmlFor="email">Введите e-mail</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                {...register('email', {
                  required: 'Заполните поле',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректный и-мейл'
                  }
                })}
              />
              {errors.email && (
                <p className="input-login__error">{errors.email.message as string}</p>
              )}
            </div>
            <div className="input-login">
              <label htmlFor="passwordLogin">Введите пароль</label><span>
                  <input
                    {...register('password', {
                      required: 'Заполните поле',
                      minLength: {
                        value: 6,
                        message: 'Минимум 6 символов'
                      }
                    })}
                    type="password"
                    placeholder="• • • • • • • • • • • •"
                    id="passwordLogin"
                    autoComplete="off" />
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
                    type="submit">Войти
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

