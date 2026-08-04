import sideImage from '../../assets/side.png';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <main className="min-h-dvh w-full">
      <div className="grid min-h-dvh md:grid-cols-2">
        {/* Form */}
        <div className="flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <RegisterForm />
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block">
          <img
            src={sideImage}
            alt="register"
            className="h-full min-h-dvh w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
