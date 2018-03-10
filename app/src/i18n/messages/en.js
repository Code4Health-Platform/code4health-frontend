export const ENGLISH_TRANSLATION = {
  lang: 'en',
  messages: {
    app: {
      welcomeMessage: '[en] welcome'
    },
    auth: {
      logOut: {
        title: 'Log Out',
        confirm: 'Are you sure you want to log out?',
        action: 'Log Out'
      },
      reset: {
        title: 'Forgotten your password?',
        form: {
          submit: 'reset',
          successMessage: 'Your password has successfully been reset'
        }
      },
      logIn: {
        title: 'Log In',
        cta: 'log in',
        form: {
          username: {
            label: 'username'
          },
          password: {
            label: 'password'
          }
        }
      },
      signUp: {
        title: 'Sign Up'
      },
      activate: {
        title: 'Activate your account',
        inProgress: 'Activating your account',
        success: 'Your account has been successfully activated'
      }
    },
    projects: {
      dashboard: {
        noProjects: 'The building blocks of the platform are called Projects. A Project provides a container for a set of services (or Project components) from the platform that you need for a particular application.'
      }
    },
    components: {
      cdr: {
        description:
          'Use this component to enable storage of patient or client records. The built-in openEHR standard allows the use of many ready-made clinical data templates and elements.'
      },
      demographics: {
        description: 'Use this module to maintain an index of patients or clients with DOB, age, address and other subject-related information or identifiers.'
      }
    },
    account: {
      accountDetails: {
        successMessage: 'Successfully updated your account',
        errorMessage: 'Unable to update your account'
      },
      changePassword: {
        successMessage: 'Successfully changed your password',
        errorMessage: 'Unable to change your password'
      }
    }
  }
}
