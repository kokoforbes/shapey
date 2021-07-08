import React, { ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentUser } from '../../state/user/user.actions';
import styles from './login.module.scss';

interface LoginProps {
  setUser: (name: string) => any;
}

const Login = (props: LoginProps) => {
  const [formData, setFormData] = useState({ username: 'kokoforbes', password: 'P@ssW0rd' });
  const { setUser } = props;

  const handleLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser(formData.username);
  };

  const handleFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLoginFormSubmit}>
        <h2 className={styles.brand}>shapey</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleFormInputChange}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleFormInputChange}
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUser: (user: string) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);