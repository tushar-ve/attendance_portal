

def debug(func):
    def Wrapper(*args, **kwargs):
        args_value = ",".join(str(arg) for arg in args )
        kwargs_value = ",".join(f"{k}: {v}" for k, v in kwargs.items())

        print(f"calling {func.__name__} with {args_value} value {kwargs_value}")
        return func(*args, **kwargs)
    
    return Wrapper



@debug
def greeting(name, greet="Hello"):
    print(f"{greet}, {name} ")


greeting("Vindo", "Ram Ram Bhai Sarre ya ne")